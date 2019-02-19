
Feature('Carrinho de compras');

Scenario('Adicionar produto ao carrinho de compras e validar o valor no carrinho', (I) => {
    I.amOnPage("https://www.netshoes.com.br/");
    I.fillField("#search-input", "Tênis VR Caminhada Detalhes em Couro Masculino - Preto");
    I.click("//button[@title='Buscar']");
    I.waitForText("RESULTADOS DE BUSCA PARA");
    I.waitForText("1 de 1 resultado");
    I.waitForText("Tênis VR Caminhada Detalhes em Couro Masculino", 15);
    I.click("//span[contains(text(),'Tênis VR Caminhada Detalhes em Couro Masculino')]/ancestor::a");
    I.waitForText("E74-0413-006-34", 5, "//section/section[1]/p[1]/span");
    I.click("//a[contains(text(),'36')]/ancestor::li");
    I.waitForText("Tênis VR Caminhada Detalhes em Couro Masculino - Preto", 5, "//*[@id='content']/div[2]/section/section[1]/h1");
    I.waitForText("R$ 89,90", 15, "//*[@id='buy-box']/div[2]/div[2]/div/span");
    I.waitForElement("#buy-button-now", 5);
    I.click("#buy-button-now");
    I.waitForText("R$ 89,90", 15, "//td/p"); 
    I.click("//span[contains(text(), 'Aumentar Quantidade')]/ancestor::button");
    I.waitForText("R$ 179,80", 15, "//td/p");
});

