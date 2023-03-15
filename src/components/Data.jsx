const data = [
  {
    id: 1,
    pname: 'highlander',
    product: 'slim casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1272502/2018/2/5/11517823086369-Highlander-White-Slim-Fit-Casual-Shirt-161517823086304-5.jpg',
    price: 'Rs 469',
  },
  {
    id: 2,
    pname: 'calvin klein jeans',
    product: 'slim fit casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16408786/2021/12/29/d183201d-6f48-4fe7-9c6b-a9345760c12f1640756908093-Calvin-Klein-Jeans-Men-Shirts-6171640756907598-1.jpg',
    price: 'Rs 4999',
  },
  {
    id: 3,
    pname: 'wrogn',
    product: 'checked casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1729391/2019/8/28/a9d4a7aa-af7e-4a37-a9d4-a94dc8c057e81566992341974-WROGN-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-52415669923403-1.jpg',
    price: 'Rs 1374',
  },
  {
    id: 4,
    pname: 'roadster',
    product: 'slim fat casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11326670/2020/10/30/53ccf1ca-0f61-4b93-8f8d-f76c5cc47eb41604045539176IndianTerrainMenNavyBluePrintedSweatshirtShirtsRoadsterMenSh1.jpg',
    price: 'Rs 719',
  },
  {
    id: 5,
    pname: 'harvard',
    product: 'slim fit casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1847238/2018/6/19/cf47e553-c267-499c-8ce5-d72c21f5d8b01529387070832-Harvard-Men-Navy--Yellow-Checked-Slim-Fit-Casual-Shirt-44215-1.jpg',
    price: 'Rs 699',
  },
  {
    id: 6,
    pname: 'h&m',
    product: 'oversized cotton shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15198496/2021/8/19/126b021c-9fe8-4924-9814-9bc06f8600811629368510776Oversizedcottonshirt1.jpg',
    price: 'Rs 909',
  },
  {
    id: 7,
    pname: 'sassafras',
    product: 'dobby sheer boxy shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11549510/2021/12/24/2a3d1c2e-4ced-4b96-81f4-0b8702be083d1640325901512-SASSAFRAS-Black-Dobby-Sheer-Boxy-Shirt-8921640325900918-1.jpg',
    price: 'Rs 584',
  },
  {
    id: 8,
    pname: 'mast & harbour',
    product: 'semi-sheer casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13879734/2021/4/5/ba48fefb-1911-4385-bbc5-f5170636b30e1617602148127-Mast--Harbour-Women-Shirts-8401617602146888-1.jpg',
    price: 'Rs 599',
  },
  {
    id: 9,
    pname: 'roadster',
    product: 'solid casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14615132/2021/8/3/3b79ea94-6efd-416f-b82c-ff4e8f540f851627985765869-Roadster-Women-White-Casual-Shirt-5701627985765145-1.jpg',
    price: 'Rs 623',
  },
  {
    id: 10,
    pname: 'tokyo talkies',
    product: 'regular fit casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/9/18/a3942a53-ce72-4e7a-93a7-1deafbca64da1600378824116-1.jpg',
    price: 'Rs 459',
  },
  {
    id: 11,
    pname: 'pantaloons junior',
    product: 'check hooded casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17055248/2022/2/4/60d73698-2349-4e49-b133-1687cb6d44bb1643981193261PantaloonsJuniorBoysRedTartanChecksCheckedCasualShirt1.jpg',
    price: 'Rs 899',
  },
  {
    id: 12,
    pname: 'ed-a-mamma',
    product: 'boys casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/15861970/2021/12/29/f6f9a28c-b895-441c-8574-73c572d950021640759923217-Ed-a-Mamma-Boys-Green-Premium-Ikkat-Casual-Shirt-47216407599-2.jpg',
    price: 'Rs 699',
  },
  {
    id: 13,
    pname: 'a.t.u.n',
    product: 'pure cotton casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16983282/2022/1/29/9ec6d678-3fff-421c-b169-a9e5f6a8246b1643475472500ATUNBoysYellowClassicFloralPrintedCasualShirt1.jpg',
    price: 'Rs 899',
  },
  {
    id: 14,
    pname: 'max',
    product: 'casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17048280/2022/2/4/51160e94-b9c6-48de-b22e-614f12122a8d1643970139625maxBoysBluePrintedCasualShirt1.jpg',
    price: 'Rs 599',
  },
  {
    id: 15,
    pname: 'yk',
    product: 'cotton chambary casual shirt',
    imgscr:
      'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14801738/2021/11/25/543bbe61-f776-4aae-8b21-cf357be110341637837102970-YK-Boys-Shirts-9741637837102635-1.jpg',
    price: 'Rs 389',
  },
]

export default data
