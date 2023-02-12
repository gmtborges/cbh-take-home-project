const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey when passes the partitionKey less then 256", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 300 });
    expect(trivialKey).toBe("300");
  });

  it("Returns the literal '0' when passes a wrong partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ wrongPartitionKey: 300 });
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' when passes a wrong partitionKey", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 256 * 1_000_000_000_000_000_000,
    });
    expect(trivialKey).toBe("0");
  });
});
