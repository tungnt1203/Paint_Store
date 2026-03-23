import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Dulux Ambiance 5in1 Diamond Glow',
    brand: 'Dulux Professional',
    category: 'Sơn nội thất',
    price: 1450000,
    oldPrice: 1890000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEnPccMxG42XfFDh41ICp6sz-ufyewQmcRmh-IjOZvWRDydAnrA99-qxwQwVjutu0VDDLtZkygFltfQ0eTHTnv9s_RlnNRDi1SvRn7RWeU6msLLEWkTxajhHPN0TechSbB147Y4HqbwHtTOYDbcR_jfQ7BcVsQ5YqM81LKQ2ptcRFqS-nSnWHefkBKHDqKJrn2VZtVoarcCcSvgnnfJG7mOIddbOfhK82Db-Jk7qK2MpsSpOVDxF4EkUdjBFuJNZr6OGc_UCI3rS0',
    description: 'Dòng sơn nội thất siêu cao cấp với bề mặt bóng mờ sang trọng, khả năng chùi rửa vượt trội và kháng khuẩn tối ưu.',
    specs: {
      'Thương hiệu': 'Dulux (AkzoNobel)',
      'Độ phủ': '13-16 m²/lít/lớp',
      'Thời gian khô': '1-2 giờ',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Bề mặt đẹp láng mịn',
      'Kháng khuẩn hiệu quả',
      'Chùi rửa tối ưu',
      'Mặt sơn nhẵn mịn'
    ],
    durability: 'Bảo vệ màng sơn bền bỉ lên đến 10 năm, chống bong tróc.',
    waterproof: 'Khả năng kháng nước bề mặt, ngăn chặn ẩm mốc xâm nhập.',
    cleaning: 'Công nghệ Diamond Glow giúp lau chùi vết bẩn cứng đầu dễ dàng.',
    capacities: ['1L', '5L', '15L'],
    colors: [
      { name: 'Trắng', hex: '#FFFFFF' },
      { name: 'Kem', hex: '#F5F5DC' },
      { name: 'Xám', hex: '#808080' },
      { name: 'Xanh', hex: '#1E3A8A' }
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEnPccMxG42XfFDh41ICp6sz-ufyewQmcRmh-IjOZvWRDydAnrA99-qxwQwVjutu0VDDLtZkygFltfQ0eTHTnv9s_RlnNRDi1SvRn7RWeU6msLLEWkTxajhHPN0TechSbB147Y4HqbwHtTOYDbcR_jfQ7BcVsQ5YqM81LKQ2ptcRFqS-nSnWHefkBKHDqKJrn2VZtVoarcCcSvgnnfJG7mOIddbOfhK82Db-Jk7qK2MpsSpOVDxF4EkUdjBFuJNZr6OGc_UCI3rS0',
      'https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '2',
    name: 'Jotun Majestic Đẹp Hoàn Hảo (Bóng)',
    brand: 'Jotun Majestic',
    category: 'Sơn nội thất',
    price: 1280000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbx-507v-1SjIDFmB3Rj4V4bTYXGgidEEy14LOM_5eiPf8yHIDfd1OmSIoJkAHa6WQElQlFEVgRofHQCGZd81ktsPAnsrztkZ06jni8NqzlE-XRtkJjg-xHJJl8ai3zRaT8jG0viXOKF2E9UmTbQr_RXgnl0VbfzJ05TxqI3lz-kq7MP8E08XTjmcWOW8tMZgP62cKRYIKzUyAqLyvb-s5SNkUbrh5CmI3-XoRJ0ssl3mPGCaa5eF24r38Emc6CCBaqIdnrxEy0uE',
    description: 'Sơn nội thất cao cấp mang lại màu sắc rực rỡ, sắc nét và bề mặt bóng mịn sang trọng.',
    specs: {
      'Thương hiệu': 'Jotun Na Uy',
      'Độ phủ': '9-12 m²/lít/lớp',
      'Thời gian khô': '2 giờ',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Màu sắc rực rỡ',
      'Bề mặt bóng mịn',
      'Dễ lau chùi',
      'Kháng khuẩn & Chống nấm mốc'
    ],
    durability: 'Màng sơn dẻo dai, giữ màu sắc tươi mới theo thời gian.',
    waterproof: 'Chống thấm ngược và ngăn ngừa nấm mốc phát triển.',
    cleaning: 'Bề mặt bóng giúp việc lau chùi trở nên nhẹ nhàng hơn bao giờ hết.',
    capacities: ['1L', '5L', '17L'],
    colors: [
      { name: 'Trắng', hex: '#FFFFFF' },
      { name: 'Vàng', hex: '#FFD700' },
      { name: 'Hồng', hex: '#FFD1DC' }
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBbx-507v-1SjIDFmB3Rj4V4bTYXGgidEEy14LOM_5eiPf8yHIDfd1OmSIoJkAHa6WQElQlFEVgRofHQCGZd81ktsPAnsrztkZ06jni8NqzlE-XRtkJjg-xHJJl8ai3zRaT8jG0viXOKF2E9UmTbQr_RXgnl0VbfzJ05TxqI3lz-kq7MP8E08XTjmcWOW8tMZgP62cKRYIKzUyAqLyvb-s5SNkUbrh5CmI3-XoRJ0ssl3mPGCaa5eF24r38Emc6CCBaqIdnrxEy0uE',
      'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '3',
    name: 'Dulux Weathershield Powerflexx',
    brand: 'Dulux Professional',
    category: 'Sơn ngoại thất',
    price: 2150000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbsZmOseFDMbGxU0B_0uKxm9MCRui7mxpd4oatBseCZgdSC3scOyEEGdvjkCrX8f7b86B8OZLklPKXBtuTfrz1TLYHkp3JO32MGjcQmz3yVeTdGUOfEYkowkATfe5pTxPQE0Ztmq-9UDZhB88YrFZoxIpo3xKt9cFkZlj_ZGydRG6LvUetzhnHZGUDlceYPAQL_6nLnTx-FRLQbTYQ79H3Jgg_Wxc6a5vR_YV_yKbU09q8mEKqK65V9OmoDBy0pVwoXOKWf5l6NuM',
    description: 'Sơn ngoại thất siêu cao cấp với công nghệ Powerflexx giúp màng sơn co giãn gấp 3 lần, bảo vệ tường nhà khỏi các vết nứt.',
    specs: {
      'Thương hiệu': 'Dulux (AkzoNobel)',
      'Độ phủ': '10-12 m²/lít/lớp',
      'Thời gian khô': '1-2 giờ',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Công nghệ Powerflexx co giãn',
      'Chống thấm vượt trội',
      'Chống rêu mốc gấp 2 lần',
      'Làm mát nhà tới 5 độ C'
    ],
    durability: 'Bảo vệ tối ưu lên đến 12 năm trước thời tiết khắc nghiệt.',
    waterproof: 'Công nghệ Powerflexx chống thấm tuyệt đối, ngăn nước mưa thấm qua khe nứt.',
    cleaning: 'Khả năng tự làm sạch bề mặt khi trời mưa.',
    capacities: ['1L', '5L', '18L'],
    colors: [
      { name: 'Trắng', hex: '#FFFFFF' },
      { name: 'Xám Nhạt', hex: '#D3D3D3' },
      { name: 'Xanh Dương', hex: '#1E3A8A' }
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbsZmOseFDMbGxU0B_0uKxm9MCRui7mxpd4oatBseCZgdSC3scOyEEGdvjkCrX8f7b86B8OZLklPKXBtuTfrz1TLYHkp3JO32MGjcQmz3yVeTdGUOfEYkowkATfe5pTxPQE0Ztmq-9UDZhB88YrFZoxIpo3xKt9cFkZlj_ZGydRG6LvUetzhnHZGUDlceYPAQL_6nLnTx-FRLQbTYQ79H3Jgg_Wxc6a5vR_YV_yKbU09q8mEKqK65V9OmoDBy0pVwoXOKWf5l6NuM',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '4',
    name: 'Nippon Odour-less Chùi Rửa Vượt Trội',
    brand: 'Nippon Paint',
    category: 'Sơn nội thất',
    price: 950000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr05sTq7Q7RySRZioRlSytHRUD-uFYlm4gLYsGBfMlmvv9J83Zc8hzbEXuCzanYxO8jWLOlN9gPMf5qPqGVrVCuetFxcINKmfjnQEheN2ihkWgEeABDr_kOnU0Pbed1ZuFyHBqrA7WUxfiJ2GbkMbAnfBVRYWV8QXZ30sAvMVQmhT-MHA24NWppw68NVk8ptkAFT6-5mcHl7XgkD3ju91PaMRU1Ol7wMPN5L7t5dKHB3WZI6JlGEtC4bGpf8RrdsMu-Xpvj4iCPY0',
    description: 'Sơn nội thất thân thiện với môi trường, hàm lượng V.O.C thấp, không mùi và dễ dàng lau chùi.',
    specs: {
      'Thương hiệu': 'Nippon Nhật Bản',
      'Độ phủ': '10-12 m²/lít/lớp',
      'Thời gian khô': '30 phút',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Gần như không mùi',
      'Chùi rửa vượt trội',
      'Thân thiện môi trường',
      'Hàm lượng V.O.C cực thấp'
    ]
  },
  {
    id: '5',
    name: 'Jotun Jotashield Bền Màu Toàn Diện',
    brand: 'Jotun Majestic',
    category: 'Sơn ngoại thất',
    price: 1890000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSQrkN8usdj4H0XR4rwFYKKrM-MxQ-o8f_FM971lJWuc-cqOQ_EYdL2Q11pDlq2ZM5FE6JbwSoJjk7QiqwdBmZXMeb6WKdB1XntAxFlWt-CP5RM7b5ssrNouOJX20QkJtAtVf9Btv1sLa9Iq1Y3strwlcpGi4r4tb16Y-HezQyt8yqCsYOEi1GuPcKWLDoYNDsKtphF00hfhOv5TirJgwqoZq9fNVgprO5Qc2TC8SvtIS5dqxenbRqDJcoFBI3F074dfCZyfzzHEE',
    description: 'Sơn ngoại thất cao cấp nhất của Jotun, bảo vệ ngôi nhà bền bỉ trước mọi điều kiện thời tiết khắc nghiệt.',
    specs: {
      'Thương hiệu': 'Jotun Na Uy',
      'Độ phủ': '9-12 m²/lít/lớp',
      'Thời gian khô': '2 giờ',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Kháng tia cực tím tối đa',
      'Chống bám bụi',
      'Chống rong rêu & nấm mốc',
      'Bảo vệ 12 năm'
    ]
  },
  {
    id: '6',
    name: 'Dulux EasyClean Chống Bám Bẩn',
    brand: 'Dulux Professional',
    category: 'Sơn nội thất',
    price: 1120000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLC3P598qUPtYecKv8mMyfZqwaKXH9_AlFlk_yD1n8nuCGusLC0_Mo-SHvcVKZEI99CIfCGYEmdjVLL_h_iz5QQJqHpjWWjYa-KYRsV92M2TKajghQFfdtBoCofIWHhyI3FfmSPCExBFmLcLKJ4zIfeluH3SuxbGZYhlyC2vDHAaRAMku2fLbl_Iso4eYq7NWw2tlUtc1A0_LgfLm_HKt-y5J4ot1ujeZwOM4iwsV_sXE-eiRcc-hT2L4-H4E5YVip_d_BAzWADn4',
    description: 'Sơn nội thất cao cấp với công nghệ chống bám bẩn chủ động, giúp ngăn chặn các vết bẩn thấm sâu vào màng sơn.',
    specs: {
      'Thương hiệu': 'Dulux (AkzoNobel)',
      'Độ phủ': '12-14 m²/lít/lớp',
      'Thời gian khô': '1-2 giờ',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Công nghệ chống bám bẩn',
      'Dễ lau chùi',
      'Kháng khuẩn',
      'Màu sắc bền đẹp'
    ]
  }
];

export const BRANDS = [
  {
    id: 'dulux',
    name: 'Dulux',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Dulux_logo.svg/2560px-Dulux_logo.svg.png',
    description: 'Thương hiệu sơn hàng đầu thế giới từ AkzoNobel.'
  },
  {
    id: 'jotun',
    name: 'Jotun',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Jotun_logo.svg/512px-Jotun_logo.svg.png',
    description: 'Giải pháp sơn tối ưu từ Na Uy cho mọi công trình.'
  },
  {
    id: 'nippon',
    name: 'Nippon Paint',
    logo: 'https://nipponpaint.com.vn/sites/default/files/nippon-paint-logo.png',
    description: 'Sơn đâu cũng đẹp với công nghệ Nhật Bản.'
  },
  {
    id: 'kova',
    name: 'Kova',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDNhaDPjgHOn22QEcbfT8sn0SlU7UFw_xHYeZnCZ7bTDQ0t1u80ppCFREZ9MOZ6VQU6wupAelmLvn8Z54r8s-XIh06B3R9SjR9oqt_Gr_OYRe-ep3SLiZv1tGmYvoygXCkxW27lCjCMcUFTCulukwxsCr3kQ0b5VLkfA4CpxOALIA62Mc0RfeOLkDpnc_vVzpQBo34TlMaAdGddBsqLaRSfiInMOpO8GYCOFjx_Fekig5ZX7v2WKdFPnTrhnUKGH6aG_R0SxK16i0',
    description: 'Thương hiệu sơn Việt vươn tầm thế giới.'
  },
  {
    id: 'toa',
    name: 'TOA Paint',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlA3c8Ck9gqh5767NNXPQvrNj3AtHW9OoPlGMnl6aXjsEhdwQhMxcUM4ppqUCsassNTdJi1tFj7Om8fbQSP8YEtif9V2pfWEEYMvTUkre5lGHVojdDoIIDmUPNlR0CFgrpXac80gg5ILP0Etk3W5LaUHQeUQsWbp_UU2f6sLtdsRJ63U8OLx1UJ1hW3DrXyLrUd1jwLx3RSZUdEBaZq79ZiHigdj-aGt9jAmeDIZtsqdM_kZz47viSszMuXA3KhNHXUlhWqkdW0hQ',
    description: 'Sơn số 1 Thái Lan với công nghệ tiên tiến.'
  }
];

export const COLOR_PALETTE = [
  {
    id: 'white',
    name: 'Trắng tinh khôi',
    hex: '#FFFFFF',
    code: 'OW 101',
    description: 'Mang lại cảm giác rộng rãi, sạch sẽ và hiện đại cho không gian.',
    preview: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    relatedProducts: ['1', '4']
  },
  {
    id: 'cream',
    name: 'Kem ấm áp',
    hex: '#F5F5DC',
    code: 'OW 108',
    description: 'Tạo không gian gần gũi, ấm cúng và sang trọng cổ điển.',
    preview: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
    relatedProducts: ['2', '6']
  },
  {
    id: 'gray',
    name: 'Xám hiện đại',
    hex: '#808080',
    code: 'GR 205',
    description: 'Sự lựa chọn hoàn hảo cho phong cách tối giản và tinh tế.',
    preview: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800',
    relatedProducts: ['1', '5']
  },
  {
    id: 'blue',
    name: 'Xanh bình yên',
    hex: '#1E3A8A',
    code: 'BL 302',
    description: 'Gợi nhớ về bầu trời và đại dương, mang lại sự thư thái.',
    preview: 'https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&q=80&w=800',
    relatedProducts: ['3', '5']
  },
  {
    id: 'yellow',
    name: 'Vàng năng lượng',
    hex: '#FFD700',
    code: 'YL 401',
    description: 'Kích thích sự sáng tạo và mang lại niềm vui cho căn phòng.',
    preview: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800',
    relatedProducts: ['2', '4']
  },
  {
    id: 'pastel',
    name: 'Hồng Pastel',
    hex: '#FFD1DC',
    code: 'PS 505',
    description: 'Nhẹ nhàng, lãng mạn và cực kỳ phù hợp cho phòng ngủ.',
    preview: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
    relatedProducts: ['4', '6']
  }
];

export const PROJECTS = [
  {
    id: '1',
    title: 'Biệt thự Vinhomes Grand Park',
    type: 'Nhà phố',
    before: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    description: 'Sử dụng sơn Dulux Weathershield bảo vệ ngoại thất bền bỉ.'
  },
  {
    id: '2',
    title: 'Căn hộ Penthouse District 1',
    type: 'Căn hộ',
    before: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1600607687960-4a2283a71056?auto=format&fit=crop&q=80&w=800',
    description: 'Phối màu Jotun Majestic mang lại vẻ đẹp sang trọng.'
  },
  {
    id: '3',
    title: 'Chuỗi Cafe The Coffee House',
    type: 'Công trình thương mại',
    before: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    after: 'https://images.unsplash.com/photo-1559925393-8be0ec41b5ec?auto=format&fit=crop&q=80&w=800',
    description: 'Sơn Nippon Odour-less đảm bảo không mùi, an toàn cho khách hàng.'
  }
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Sơn nhà màu gì đẹp 2026? Xu hướng màu sắc kiến trúc mới nhất',
    excerpt: 'Khám phá những gam màu sẽ lên ngôi trong năm 2026, từ tông đất ấm áp đến xanh mint thanh khiết.',
    image: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800',
    date: '20/03/2026'
  },
  {
    id: '2',
    title: 'Top 5 màu sơn phòng ngủ giúp bạn ngủ ngon và sâu hơn',
    excerpt: 'Màu sắc ảnh hưởng trực tiếp đến tâm trạng. Hãy chọn đúng màu để có giấc ngủ trọn vẹn.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
    date: '15/03/2026'
  },
  {
    id: '3',
    title: 'Bí quyết chọn sơn ngoại thất chống thấm tuyệt đối cho mùa mưa',
    excerpt: 'Hướng dẫn chi tiết cách chọn và thi công sơn chống thấm để bảo vệ ngôi nhà của bạn.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    date: '10/03/2026'
  }
];

export const SERVICES = [
  {
    title: 'Tư vấn màu miễn phí',
    description: 'Chuyên gia phối màu giúp bạn chọn gam màu hoàn hảo.',
    icon: 'Palette'
  },
  {
    title: 'Giao hàng tận nơi',
    description: 'Giao hàng nhanh chóng trong ngày tại TP.HCM.',
    icon: 'Truck'
  },
  {
    title: 'Cam kết chính hãng',
    description: 'Hoàn tiền 200% nếu phát hiện hàng giả, hàng nhái.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Hỗ trợ thi công',
    description: 'Kết nối đội ngũ thợ sơn tay nghề cao, uy tín.',
    icon: 'Wrench'
  }
];

export const CATEGORIES: Category[] = [
  {
    id: 'interior',
    name: 'Sơn nội thất',
    description: 'Tạo ra không gian sống tuyệt vời với các dòng sơn nội thất cao cấp.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu9fY2EdRzb_a5_OLh31UzqhxQo3-FOoybjQhiJQHsEIwKat-d6w0LO8z-EMfdJTDlIb2joXYQz149-M4akJUqWcm0EV4NZt1SAiNAhWiVn8Wed3SZZm17_zWtiZZhsRD2pbbc_Pt8pi9jE95txQY7ZpdtTHriZJGTbOgODZ1K7yjv-3hFBjK0lvS2iBN7fxhP_E1jSMqhjY3W6nDun5Sx67jhTAv-ySA71mH3qnTDJ0npQI9Ikxp7eKPmSj1-Rico5VUMpSnpYx0'
  },
  {
    id: 'exterior',
    name: 'Sơn ngoại thất',
    description: 'Bảo vệ ngôi nhà của bạn trước mọi điều kiện thời tiết khắc nghiệt.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlA3c8Ck9gqh5767NNXPQvrNj3AtHW9OoPlGMnl6aXjsEhdwQhMxcUM4ppqUCsassNTdJi1tFj7Om8fbQSP8YEtif9V2pfWEEYMvTUkre5lGHVojdDoIIDmUPNlR0CFgrpXac80gg5ILP0Etk3W5LaUHQeUQsWbp_UU2f6sLtdsRJ63U8OLx1UJ1hW3DrXyLrUd1jwLx3RSZUdEBaZq79ZiHigdj-aGt9jAmeDIZtsqdM_kZz47viSszMuXA3KhNHXUlhWqkdW0hQ'
  },
  {
    id: 'waterproofing',
    name: 'Sơn chống thấm',
    description: 'Độ bền cực cao cho khí hậu nhiệt đới.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDNhaDPjgHOn22QEcbfT8sn0SlU7UFw_xHYeZnCZ7bTDQ0t1u80ppCFREZ9MOZ6VQU6wupAelmLvn8Z54r8s-XIh06B3R9SjR9oqt_Gr_OYRe-ep3SLiZv1tGmYvoygXCkxW27lCjCMcUFTCulukwxsCr3kQ0b5VLkfA4CpxOALIA62Mc0RfeOLkDpnc_vVzpQBo34TlMaAdGddBsqLaRSfiInMOpO8GYCOFjx_Fekig5ZX7v2WKdFPnTrhnUKGH6aG_R0SxK16i0'
  }
];
