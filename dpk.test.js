const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partitionKey when passes the partitionKey less then 256", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 128 });
    expect(trivialKey).toBe("128");
  });

  it("Returns the literal '0' when passes a wrong partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ wrongPartitionKey: 300 });
    expect(trivialKey).toBe("0");
  });

  it("Returns the hash when passes a partitionKey more than 256", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 512,
    });
    expect(trivialKey).toBe(
      "ee23fc0dad5844cd646ffbfb2fe13ec8a607d0ce6591bf3a1d23ffd804a3f9c7c889f640b976141503aac99b3c9dad2f90748e2967dc5ddc50466a2ad5bbee7b"
    );
  });
});
