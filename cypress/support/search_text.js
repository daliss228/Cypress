// PAGE OBJECT

// class SearchText {
//     constructor() {
//         this.searchInput = '#search_query_top';
//         this.searchButton = '#searchbox > .btn';
//     }

//     search = (text) => {
//         cy.get(this.searchInput).type(text);
//         cy.get(this.searchButton).click();
//     }
// }

// export default new SearchText();


// FIXTURE

class SearchText {
    search = (text) => {
        cy.fixture('index.json').then((locators) => {
            cy.get(locators.searchInput).type(text);
            cy.get(locators.searchButton).click();
        })
        
    }
}

export default new SearchText();