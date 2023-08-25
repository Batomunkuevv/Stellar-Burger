const LOGIN = 'ibatomunkuevv@gmail.com';
const PASSWORD = 'Iloveyou2906';

describe('Initialize App', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should display app menu', () => {
        cy.contains('Конструктор').should('exist');
        cy.contains('Лента заказов').should('exist');
        cy.contains('Личный кабинет').should('exist');
    })

    it('should check menu clickability', () => {
        cy.contains('Конструктор').click();
        cy.contains('Соберите бургер').should('exist');
        cy.contains('Лента заказов').click();
        cy.contains('Готовы').should('exist');
        cy.contains('Личный кабинет').click();
        cy.contains('Вход').should('exist');
    })

    it('should load ingredients', () => {
        cy.get('[data-test-category = "buns"] article').should('have.length', 2);
        cy.get('[data-test-category = "sauces"] article').should('have.length', 4);
        cy.get('[data-test-category = "mains"] article').should('have.length', 9);
    })

    it('should be constructor initialized', () => {
        cy.contains('Начните собирать свой бургер!');
        cy.contains('Оформить заказ');
    })
})

describe("Check ingredient modal", () => {
    beforeEach(() => {
        cy.visit('/');
    });

    const checkIngredientModal = (ingredient) => {
        ingredient.click();
        cy.url().should('contain', '/ingredients/')
        cy.get("[data-test='modal']").contains('Детали ингредиента').should('exist');
        cy.get("[data-test='modal-ingredient-image']").should('exist');
        cy.get("[data-test='modal-ingredient-name']").should('exist');
        cy.get("[data-test='modal-ingredient-calories']").should('exist');
        cy.get("[data-test='modal-ingredient-proteins']").should('exist');
        cy.get("[data-test='modal-ingredient-fat']").should('exist');
        cy.get("[data-test='modal-ingredient-carbohydrates']").should('exist');
        cy.get("[data-test='modal-close").click();
        cy.get("[data-test='modal']").should('not.exist');
        cy.url().should('not.contain', '/ingredients/');
    };

    const checkIngredientModalOverlay = (ingredient) => {
        ingredient.click();
        cy.get("[data-test='modal-overlay']").should('exist');
        cy.get("[data-test='modal-close").click();
        cy.get("[data-test='modal-overlay']").should('not.exist');
    };

    it('should check ingredient modal', () => {
        checkIngredientModal(cy.get('[data-test-category="buns"] article:first-child'));
        checkIngredientModalOverlay(cy.get('[data-test-category="buns"] article:first-child'));
    })
});

describe("Creating of order", () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it("should creates the order after login", () => {
        logIn(LOGIN, PASSWORD);
        fillConstructor();
        cy.contains("Оформить заказ").click();
        cy.get('[data-test="preloader"]').should('exist');

        cy.wait(15 * 1000);

        cy.contains('Идентификатор заказа', { matchCase: false }).should('exist');
    });
});

function logIn(login, password) {
    cy.get('input[type="email"]').type(login);
    cy.get('input[type="password"]').type(password);
    cy.get('button').click();
    cy.contains('Соберите бургер');
}

function fillConstructor() {
    dragIngredient(cy.get('[data-test-category="buns"] article').first())
    dragIngredient(cy.get('[data-test-category="mains"] article').first())
    dragIngredient(cy.get('[data-test-category="sauces"] article').first())

    cy.wait(1 * 1000);
    cy.get(".constructor-element").first().should("exist");
    cy.get("[data-test='constructor-list'] .constructor-element").should('have.length', 2);
}

function dragIngredient(ingredient) {
    const dataTransfer = new DataTransfer();

    ingredient.trigger("dragstart", { dataTransfer });
    cy.wait(1 * 1000);
    cy.get("[data-test='constructor']").trigger('drop', { dataTransfer });
}