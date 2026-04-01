import { Product, Category } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Dulux Ambiance 5in1 Diamond Glow',
    brand: 'Dulux Professional',
    category: 'Sơn nước',
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
      'https://picsum.photos/seed/paint-gallery/800/600',
      'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '2',
    name: 'Jotun Majestic Đẹp Hoàn Hảo (Bóng)',
    brand: 'Jotun Majestic',
    category: 'Sơn nước',
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
    category: 'Sơn nước',
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
    name: 'Sơn dầu Jotun Essence',
    brand: 'Jotun Majestic',
    category: 'Sơn dầu',
    price: 850000,
    image: 'https://picsum.photos/seed/jotun-essence/800/600',
    description: 'Sơn dầu cao cấp bảo vệ bề mặt gỗ và kim loại, nhanh khô và bền màu.',
    specs: {
      'Thương hiệu': 'Jotun Na Uy',
      'Độ phủ': '12-14 m²/lít/lớp',
      'Thời gian khô': '4-6 giờ',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Nhanh khô',
      'Bền màu',
      'Chống rỉ sét',
      'Dễ thi công'
    ]
  },
  {
    id: '4b',
    name: 'Sơn dầu Tilac Nippon',
    brand: 'Nippon Paint',
    category: 'Sơn dầu',
    price: 720000,
    image: 'https://picsum.photos/seed/nippon-tilac/800/600',
    description: 'Sơn dầu gốc Alkyd cho bề mặt gỗ và kim loại nội ngoại thất.',
    specs: {
      'Thương hiệu': 'Nippon Nhật Bản',
      'Độ phủ': '10-12 m²/lít/lớp',
      'Thời gian khô': '3-5 giờ',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Độ bóng cao',
      'Chống rêu mốc',
      'Màng sơn đanh chắc',
      'Đa dạng màu sắc'
    ]
  },
  {
    id: '5',
    name: 'Sơn Epoxy Kova KL-5',
    brand: 'Kova',
    category: 'Sơn Epoxy',
    price: 3250000,
    image: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800',
    description: 'Sơn Epoxy hệ nước cho sàn công nghiệp, chịu mài mòn và va đập cao.',
    specs: {
      'Thương hiệu': 'Kova Việt Nam',
      'Độ phủ': '4-5 m²/kg/2 lớp',
      'Thời gian khô': '24 giờ',
      'Số lớp sơn': '2-3 lớp'
    },
    features: [
      'Chịu mài mòn cao',
      'Kháng hóa chất',
      'Chống trơn trượt',
      'Thân thiện môi trường'
    ]
  },
  {
    id: '6',
    name: 'Chống thấm Kova CT-11A Plus',
    brand: 'Kova',
    category: 'Sơn chống thấm',
    price: 1850000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDNhaDPjgHOn22QEcbfT8sn0SlU7UFw_xHYeZnCZ7bTDQ0t1u80ppCFREZ9MOZ6VQU6wupAelmLvn8Z54r8s-XIh06B3R9SjR9oqt_Gr_OYRe-ep3SLiZv1tGmYvoygXCkxW27lCjCMcUFTCulukwxsCr3kQ0b5VLkfA4CpxOALIA62Mc0RfeOLkDpnc_vVzpQBo34TlMaAdGddBsqLaRSfiInMOpO8GYCOFjx_Fekig5ZX7v2WKdFPnTrhnUKGH6aG_R0SxK16i0',
    description: 'Chống thấm cao cấp cho tường đứng, ngăn chặn nước thấm hiệu quả.',
    specs: {
      'Thương hiệu': 'Kova Việt Nam',
      'Độ phủ': '2-2.5 m²/kg/2 lớp',
      'Thời gian khô': '2 giờ',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Chống thấm tuyệt đối',
      'Bám dính cực tốt',
      'Bền bỉ với thời gian',
      'An toàn cho người dùng'
    ]
  },
  {
    id: '7',
    name: 'Dulux Aquatech Chống Thấm Hiệu Quả',
    brand: 'Dulux Professional',
    category: 'Sơn chống thấm',
    price: 1650000,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDNhaDPjgHOn22QEcbfT8sn0SlU7UFw_xHYeZnCZ7bTDQ0t1u80ppCFREZ9MOZ6VQU6wupAelmLvn8Z54r8s-XIh06B3R9SjR9oqt_Gr_OYRe-ep3SLiZv1tGmYvoygXCkxW27lCjCMcUFTCulukwxsCr3kQ0b5VLkfA4CpxOALIA62Mc0RfeOLkDpnc_vVzpQBo34TlMaAdGddBsqLaRSfiInMOpO8GYCOFjx_Fekig5ZX7v2WKdFPnTrhnUKGH6aG_R0SxK16i0',
    description: 'Công nghệ Hydroshield giúp bề mặt đanh chắc, chống thấm tối ưu.',
    specs: {
      'Thương hiệu': 'Dulux (AkzoNobel)',
      'Độ phủ': '4-5 m²/kg/2 lớp',
      'Thời gian khô': '2 giờ',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Chống thấm vượt trội',
      'Bề mặt đanh chắc',
      'Chống rêu mốc',
      'Dễ thi công'
    ]
  },
  {
    id: '8',
    name: 'Sơn Epoxy Jotun Penguard HB',
    brand: 'Jotun Majestic',
    category: 'Sơn Epoxy',
    price: 2850000,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    description: 'Sơn Epoxy hai thành phần cho sắt thép và kim loại, chống ăn mòn cực tốt.',
    specs: {
      'Thương hiệu': 'Jotun Na Uy',
      'Độ phủ': '6-8 m²/lít/lớp',
      'Thời gian khô': '8 giờ',
      'Số lớp sơn': '2 lớp'
    },
    features: [
      'Chống ăn mòn cực tốt',
      'Bám dính tuyệt vời',
      'Chịu va đập mạnh',
      'Bền bỉ trong môi trường khắc nghiệt'
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
    logo: 'https://toagroup.com.vn/vnt_upload/weblink/TOA_Logo_Standard_1.png',
    description: 'Sơn công nghệ Thái Lan, bảo vệ tối ưu.'
  },
  {
    id: 'spec',
    name: 'Spec',
    logo: 'https://spec.com.vn/wp-content/uploads/2018/04/logo-spec.png',
    description: 'Đỉnh cao về trang trí và bảo vệ.'
  }
];

/** Chuỗi tìm kiếm đầy đủ cho Google Maps (geocoding ổn định hơn so với dòng địa chỉ rút gọn) */
const SHOWROOM_MAP_SEARCH_QUERY =
  '302A Nguyễn Văn Cừ, Phường Tân Lập, Buôn Ma Thuột, Tỉnh Đắk Lắk, Việt Nam';

export const CONTACT_INFO = {
  name: 'Sơn Ngân',
  fullName: 'Công ty TNHH TM & DV Sơn Ngân',
  headerTitle: 'Nhà phân phối sơn chính hãng',
  address: '302A Nguyễn Văn Cừ - P. Tân Lập - T. Đắk Lắk',
  /** Tọa độ khu vực Nguyễn Văn Cừ — Tân Lập (đồng bộ với địa chỉ showroom) */
  map: {
    lat: 12.6838272,
    lng: 108.0797846,
    embedUrl:
      'https://www.google.com/maps?q=12.6838272%2C108.0797846&z=17&hl=vi&output=embed',
    openUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOWROOM_MAP_SEARCH_QUERY)}`,
  },
  phone: '0366.625.695',
  phone2: '0377.328.602',
  email: 'sonnganbmt@gmail.com',
  workingHours: '7:30 - 18:00 (T2 - CN)',
  slogan: 'chất lượng - uy tín - tận tâm',
  bannerSlogan: 'GIAO HÀNG TOÀN QUỐC',
  services: [
    'Sơn nước',
    'Sơn dầu',
    'Sơn Epoxy',
    'Sơn sắt thép',
    'Sơn chống thấm',
    'Vật tư ngành sơn'
  ]
};

export const CATEGORIES: Category[] = [
  {
    id: 'water-paint',
    name: 'Sơn nước',
    description: 'Sơn nội thất và ngoại thất cao cấp cho mọi công trình.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu9fY2EdRzb_a5_OLh31UzqhxQo3-FOoybjQhiJQHsEIwKat-d6w0LO8z-EMfdJTDlIb2joXYQz149-M4akJUqWcm0EV4NZt1SAiNAhWiVn8Wed3SZZm17_zWtiZZhsRD2pbbc_Pt8pi9jE95txQY7ZpdtTHriZJGTbOgODZ1K7yjv-3hFBjK0lvS2iBN7fxhP_E1jSMqhjY3W6nDun5Sx67jhTAv-ySA71mH3qnTDJ0npQI9Ikxp7eKPmSj1-Rico5VUMpSnpYx0'
  },
  {
    id: 'oil-paint',
    name: 'Sơn dầu',
    description: 'Bảo vệ bề mặt gỗ và kim loại bền bỉ.',
    image: 'https://picsum.photos/seed/oil-paint-cat/800/600'
  },
  {
    id: 'epoxy-paint',
    name: 'Sơn Epoxy',
    description: 'Giải pháp sàn công nghiệp chịu lực và thẩm mỹ.',
    image: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'steel-paint',
    name: 'Sơn sắt thép',
    description: 'Chống rỉ sét và bảo vệ kết cấu thép.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'waterproofing',
    name: 'Sơn chống thấm',
    description: 'Ngăn chặn ẩm mốc, bảo vệ tường và sàn tuyệt đối.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDNhaDPjgHOn22QEcbfT8sn0SlU7UFw_xHYeZnCZ7bTDQ0t1u80ppCFREZ9MOZ6VQU6wupAelmLvn8Z54r8s-XIh06B3R9SjR9oqt_Gr_OYRe-ep3SLiZv1tGmYvoygXCkxW27lCjCMcUFTCulukwxsCr3kQ0b5VLkfA4CpxOALIA62Mc0RfeOLkDpnc_vVzpQBo34TlMaAdGddBsqLaRSfiInMOpO8GYCOFjx_Fekig5ZX7v2WKdFPnTrhnUKGH6aG_R0SxK16i0'
  },
  {
    id: 'materials',
    name: 'Vật tư ngành sơn',
    description: 'Cọ, rulo, súng phun và các dụng cụ thi công chuyên nghiệp.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800'
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
  }
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Sơn nhà màu gì đẹp 2026? Xu hướng màu sắc kiến trúc mới nhất',
    excerpt: 'Khám phá những gam màu sẽ lên ngôi trong năm 2026, từ tông đất ấm áp đến xanh mint thanh khiết.',
    image: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&q=80&w=800',
    date: '20/03/2026'
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
    description: 'Giao hàng nhanh chóng toàn quốc.',
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
