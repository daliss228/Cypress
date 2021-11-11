import searchText from '../support/search_text';

describe('Formas de encontrar un elemento', () => {

    /* it('Buscar en barra de búsqueda', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains("dress")
    });
     */
    /* it('Buscar en barra de búsqueda', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').should('exist')
        cy.get('.search_query.form-control.ac_input').type('dress');
        // cy.get('[name="search_query"]').type('asf');
        cy.get('#search_query_top').should('contain', 'dress')
        
    });*/

    // before(() => {
    //     cy.log('before');
    // });
    
    // beforeEach(() => {
    //     cy.log('beforeEach');
    //     cy.visit('http://automationpractice.com/index.php');
    // });
    
    // it('preuba', () => {
    //     cy.log('it');
    //     cy.get('#search_query_top').should('exist')
    // });

    // afterEach(() => {
    //     cy.log('afterEach');
    // });
    

    // after(() => {
    //     cy.log('after');
    // });

    // // our auth cookie should be present
    // cy.getCookie('your-session-cookie').should('exist')
    
    // // UI should reflect this user being logged in
    // cy.get('h1').should('contain', 'jane.lane')

 /******UNO********/
    // beforeEach(() => {
    //     cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    // });

    // it('Chequear Tops y talla S', () => {
    //     cy.get('#layered_category_4').check();
    //     cy.get('#layered_id_attribute_group_1').check();
    //     cy.wait(2000)
    // });
    
    
    // it('Deschequear Tops y talla S', () => {
    //     cy.get('#layered_category_4').uncheck();
    //     cy.get('#layered_id_attribute_group_1').uncheck();
    // });

    // it('Ordenar por', () => {
    //     cy.get('#selectProductSort').select('In stock');
    // });


 /******DOS********/

    // beforeEach(() => {
    //     cy.visit('http://automationpractice.com/index.php');
    // });


    // it('Obtener el primer elemento cuando hay varios con la misma clase', () => {
    //     // obtener el primero
    //     // cy.get('[class="sf-with-ul"]').first().click() 
    //     // obtener cualquiera
    //     cy.get('[class="sf-with-ul"]').eq(3).click() 
    // });


 /******TRES*******PAGE OBJECT*/

    // beforeEach(() => {
    //     cy.visit('http://automationpractice.com/index.php');
    // });

    // it('', () => {
    //     searchText.search('dress');
    //     searchText.search('hat');
    // });


/******CUATRO*******COMMANDS*/


    // beforeEach(() => {
    //     cy.visit('http://automationpractice.com/index.php');
    // });

    // it('', () => {
    //     cy.myLog('hola como estás?')
    // });

/******CINCO*******FIXTURES*/

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');
    });

    it('', () => {
        searchText.search('dress');
    });
}) 