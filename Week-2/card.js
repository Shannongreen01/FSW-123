
export default function Card(props){
    return (
          <div className='theCont'>
              <div className='box' style={props.boxStyle}>
                  <h1>{props.Title}</h1>
                  <h2>{props.subtitle}</h2>
              </div>
              <div className='box' style={props.boxStyle}>
                  <h3>{props.description}</h3>
              </div>
          </div>
    )
  }
 