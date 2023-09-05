import { RuntimeFormatterPipe } from './runtime-formatter.pipe';

describe('RuntimeFormatterPipe', () => {
  let pipe: RuntimeFormatterPipe;

  beforeEach(() => {
    pipe = new RuntimeFormatterPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform minutes less than 60 correctly', () => {
    const result = pipe.transform(30);
    expect(result).toBe('30min');
  });

  it('should transform minutes greater than 60 correctly', () => {
    const result = pipe.transform(90);
    expect(result).toBe('1h 30min');
  });

  it('should handle negative input', () => {
    const result = pipe.transform(-45);
    expect(result).toBe('-45min');
  });
});
