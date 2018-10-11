import { Selector } from 'testcafe' // first import testcafe selectors

fixture`Getting Started`.page`http://localhost:3000/checkup` // declare the fixture // specify the start page

// then create a test and place your code there
test('Clicking yes button updates question counter', async t => {
  await t
    .click(
      '#root > section > section > button.ResponseButton-sc-1fj54oi-0.dWMGou'
    )

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(
      Selector('#root > section > div.QuestionCounter-sc-12k7q1q-0.jjVxvu')
        .innerText
    )
    .eql('2/28')
})
