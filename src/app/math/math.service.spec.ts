import { TestBed } from '@angular/core/testing';
import { MathService } from './math.service';

describe('MathService', () => {
  let mathService: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathService]
    });
    mathService = TestBed.inject(MathService);
  });

  it('should add two numbers', () => {
    // Arrange
    const a = 5;
    const b = 10;

    // Act
    const result = mathService.sum(a, b);

    // Assert
    expect(result).toBe(15);
  });

  it('should return zero when adding zero to any number', () => {
    // Arrange
    const a = 10;
    const b = 0;

    // Act
    const result1 = mathService.sum(a, b);
    const result2 = mathService.sum(b, a);

    // Assert
    expect(result1).toBe(a);
    expect(result2).toBe(a);
  });
});
