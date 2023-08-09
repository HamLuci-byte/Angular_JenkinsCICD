
pipeline {

    agent any
    environment {
        AWS_ACCOUNT_ID="your aws account"
        AWS_DEFAULT_REGION="eu-central-1"
        IMAGE_REPO_NAME="repo name"
        IMAGE_TAG="latest"
        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"

    }
    stages {
        
        

        stage('Build Image') {
            steps {
                script {
                    dockerImage = docker.build "${IMAGE_REPO_NAME}:${IMAGE_TAG}"
                }
            }
        }

        stage('Test') {
            steps {
                sh 'npm test' 
            }
        }
        

        stage('Logging into AWS ECR on CICD server') {
            steps {
                script {
                sh "aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com"
                }
                 
            }
        }


        stage('Push Docker Image to ECR') {
            steps{  
                script {
                        sh "docker tag ${IMAGE_REPO_NAME}:${IMAGE_TAG} ${REPOSITORY_URI}:$IMAGE_TAG"
                        sh "docker push ${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}:${IMAGE_TAG}"
                }
            }
        }


        stage('Deploy to EC2') {
            steps {
                sshagent(['ssh-agent']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ubuntu@sshaddr...... '
                        
                        sudo aws ecr get-login .....
                        
                        
                        if docker ps -a | grep Container; then
                            sudo docker stop Container
                            sudo docker rm Container
                        fi

                        
                        docker pull ......
                        
                        sudo docker run -d -p 80:80 --name Container ${REPOSITORY_URI}:${IMAGE_TAG}
                    '
                    """
                }
            }
        }

        
    }
}
