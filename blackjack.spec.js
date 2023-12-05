describe('Tests for the Blackjack game', () => {
  it('should calculate the score of a hand', () => {
    const hand = [
        {displayVal: 'Six', val: 6, suit: 'hearts'},
        {displayVal: 'Seven', val: 7, suit: 'hearts'},
    ]

    const result = calcPoints(hand);
    
    expect(result.total).toEqual(13);
    expect(result.isSoft).toEqual(false);
  });

  it("should test dealerShouldDraw function", () => {
    const dealerHand1 = [
      {displayVal: 'Ten', val: 10, suit: 'hearts'},
      {displayVal: 'Nine', val: 9, suit: 'hearts'},  
    ];
    const dealerHand2 = [
        {displayVal: 'Ace', val: 11, suit: 'hearts'},
        {displayVal: '6', val: 6, suit: 'hearts'},  
    ];
    const dealerHand3 = [
        {displayVal: 'Ten', val: 10, suit: 'hearts'},
        {displayVal: 'Six', val: 6, suit: 'hearts'},
        {displayVal: 'Ace', val: 1, suit: 'hearts'},  
    ];
    const dealerHand4 = [
        {displayVal: 'Two', val: 2, suit: 'hearts'},
        {displayVal: 'Four', val: 4, suit: 'hearts'},
        {displayVal: 'Two', val: 2, suit: 'hearts'},
        {displayVal: 'Five', val: 5, suit: 'hearts'},  
    ];

    const result1 = dealerShouldDraw(dealerHand1);
    const result2 = dealerShouldDraw(dealerHand2);
    const result3 = dealerShouldDraw(dealerHand3);
    const result4 = dealerShouldDraw(dealerHand4);

    expect(result1).toEqual(false);
    expect(result2).toEqual(true);
    expect(result3).toEqual(false);
    expect(result4).toEqual(true);
  });
});