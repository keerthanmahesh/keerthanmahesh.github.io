export type Education = {
  id: string
  institution: string
  degree: string
  field: string
  start: string
  end: string
  location: string
}

export const education: Education[] = [
  {
    id: 'umd',
    institution: 'University of Maryland, College Park',
    degree: 'Master of Engineering',
    field: 'Software Engineering',
    start: 'Aug 2022',
    end: 'Dec 2023',
    location: 'College Park, MD',
  },
  {
    id: 'bits-pilani',
    institution: 'Birla Institute of Technology and Science, Pilani',
    degree: 'Bachelor of Engineering',
    field: 'Electrical and Electronics Engineering',
    start: 'Aug 2016',
    end: 'Aug 2020',
    location: 'Pilani, India',
  },
]
