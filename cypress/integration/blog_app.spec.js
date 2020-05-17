describe("Blog app", function () {
  beforeEach(function () {
    cy.request("POST", "http://localhost:3001/api/testing/reset");
    const user = {
      name: "Richard Dang",
      username: "richarddang",
      password: "password",
    };
    cy.request("POST", "http://localhost:3001/api/users/", user);
    cy.visit("http://localhost:3000");
  });

  it("login form is shown", function () {
    cy.contains("log in to application");
    cy.contains("login");
  });

  describe("login", function () {
    it("succeeds with correct credentials", function () {
      cy.get("#username").type("richarddang");
      cy.get("#password").type("password");
      cy.get("#login-button").click();
      cy.contains("Richard Dang has logged in");
    });
    it("fails with wrong credentials", function () {
      cy.get("#username").type("richarddang");
      cy.get("#password").type("wrongpassword");
      cy.get("#login-button").click();

      cy.get(".notification").should("contain", "wrong username or password");

      cy.get("html").should("not.contain", "Richard Dang has logged in");
    });
  });

  describe.only("when logged in", function () {
    this.beforeEach(function () {
      cy.login({ username: "richarddang", password: "password" });
    });
    it("a blog can be created", function () {
      cy.contains("new blog").click();
      cy.get("#title").type("Title of Blog");
      cy.get("#author").type("Richard Dang");
      cy.get("#url").type("http://blog.com");
      cy.get("#create-button").click();
      cy.contains("a new blog Title of Blog by Richard Dang added");
      cy.contains("Title of Blog Richard Dang");
    });
  });
});
