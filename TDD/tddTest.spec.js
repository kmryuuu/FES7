// 테스트 유닛을 묶어주고, 전체적인 설명을 제공하는 함수 입니다.
describe('자스민 테스트입니다!', () => {
  // it 함수는 테스트 유닛을 의미한다.
  it('1을 더해주는 함수입니다.', () => {
    const num = 30;

    // expect :
    expect(pluseOne(30).toBe(31));
  });
});