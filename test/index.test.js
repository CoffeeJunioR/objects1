import orderByProps from "../src";
const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};


test('проверка сортировки', () => {
    const expectedArray = [
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80},
        {key: "defence", value: 40},
        {key: "health", value: 10}
      ]
      expect(orderByProps(obj, ['name', 'level'])).toEqual(expectedArray);
})