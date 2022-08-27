import { GoodsModel } from './goods-model';

describe('GoodsModel', () => {
  it('should create an instance', () => {
    expect(new GoodsModel(1,1,"1/1/2014","5","out")).toBeTruthy();
  });
});
