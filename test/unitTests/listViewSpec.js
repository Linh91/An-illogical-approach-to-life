var characterView = require('../../src/models/listView.js');

const baloo = [{ _id: '5937fa7720641e126d847e58', avatar: 'someshit here', userId: '5937fa6a20641e126d847e57', name: 'bob', __v: 0, level: 1, defence: 7, attack: 4, xp: 0 },
{ _id: '593808c5692cee1a73ea0ea8', avatar: 'someshit here', userId: '5937fa6a20641e126d847e57', name: 'ADAM THE SLAYER', __v: 0, level: 1, defence: 4, attack: 6, xp: 0 },
{ _id: '5938093acdc3101b66a511ec', avatar: 'someshit here', userId: '5937fa6a20641e126d847e57', name: 'SAMI THE SAMURAI', __v: 0, level: 1, defence: 1, attack: 9, xp: 0 }]

describe('characterView', function(){
  it('shows the characters according to id', function(){
    expect(characterView(baloo, 0).name).toEqual('bob')
  })
})
