export const testimonials = [
  {
    testimonial:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    pictureImgSrc: './images/profile-1.jpg',
    name: 'Satish Patel',
    position: 'Founder & CEO, Huddle',
  },
  {
    testimonial:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    pictureImgSrc: './images/profile-2.jpg',
    name: 'Bruce McKenzie',
    position: 'Founder & CEO, Huddle',
  },
  {
    testimonial:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    pictureImgSrc: './images/profile-3.jpg',
    name: 'Iva Boyd',
    position: 'Founder & CEO, Huddle',
  },
].map((testimonial, index) => ({ id: index + 1, ...testimonial }))
