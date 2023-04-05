import { LeftOutlined, RightOutlined } from '@ant-design/icons'

const NextArrow = props => {
    const { className, style, onClick } = props
    return (
        <RightOutlined 
          className={className}
        
          style={{
            ...style,
            color: 'black',
            fontSize: '15px',
            lineHeight: '1.5715'
          }}

          onClick={onClick}
        />
    )
  }

const PrevArrow = props => {
    const { className, style, onClick } = props
    return (
        <LeftOutlined 
          className={className}
        
          style={{
            ...style,
            color: 'black',
            fontSize: '15px',
            lineHeight: '1.5715'
          }}
          
          onClick={onClick}
        />
    )
  }

export default {
    infinite: true,
    draggable: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>
}