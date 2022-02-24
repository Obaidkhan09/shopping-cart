import NotFoundImg from '../assets/notfound.png'

export default function NotFound() {
  return (
    <div style={{ display : 'flex', justifyContent : 'center' }}>
        <img src={NotFoundImg} style={{ width : '55%', height : 'auto' }} />
    </div>
  )
}
