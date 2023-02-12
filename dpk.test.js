const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the hash when passes the partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 300 });
    expect(trivialKey).toBe("12123123");
  });
});
