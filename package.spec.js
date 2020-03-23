import packages from "./package.json";

describe("package.json", () => {
  it("dependencies should match with peerDependencies", () => {
    expect.hasAssertions();
    expect(packages.dependencies).toStrictEqual(packages.peerDependencies);
  });
});
