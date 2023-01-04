
import { Row, Col} from 'antd'
function Container(props){

    return <div>
        <div style={{
            width:"80%",
            border:"2px solid",
            height:"100%",
            padding:"25px",
            backgroundColor:"#022f44",
            boxShadow:"0px 0px 10px #fac000"
        }}>
         <Row style={{
            fontSize:"15px"
         }}>
              <Col span={12} style={{
                marginRight:"10rem"
              }}>
                <img 
                  style={{
                    'boxShadow': "0px 4px 25px #fff8ba"
                  }}
                  height="800px"
                  src="./dbz.jpg"
                  
                />
              <div style={{
                'font-size': '55px',
               'font-weight': "600",
                'color': "#cee914",
                'padding': "30px",
                'font-style': "oblique",
            }}
              >  Ritesh Kumar 
                
                </div>
                <span style={{
                'font-size': '20px',
                'font-weight': "500",
              "margin-left": "27rem",
                "color": "tan",
                "text-shadow": "4px 0px 10px #2cd3d3"
              }}>
                Since 1999
              </span>
              </Col>
              <Col span={8} 
              style={{
                'fontSize':"15px",
                'text-shadow': '0px 0px 25px #fffbd6',
                'color': '#fffa80'
              }}>
               <p>
                    I am software engineer with Graduation in CSE in 2020. I am someone who is not focused to get expertise in any Technology I love to explore the different techs. My main focus is get to the core of Problem solving.
                    Give me a problem I would love to solve it in any specific techs.
                    Currently I am indulge in process of startup building.
                    I have worked from age old techs such as dexterity to modern tech MERN Stack and yes I am fascinated by JavaScript, Dont know why!
               </p>

              <h3>
                    Lets change problems into possibilities.
              </h3>
              <p>
               <h3>Worked With.</h3> 
                <ul>
                    <li> Firebase </li>
                    <li>  Google cloud services  </li>
                    <li>  NestJs  </li>
                    <li>  Next js </li>
                    <li>  MongoDB  </li>
                    <li>  MySQL DB   </li>
                    <li>   React js    </li>
                    <li>   Node js    </li>
                    <li>  Express   </li>
                    <li>  Javascript   </li>
                    <li> Jquery   </li>
                    <li>  Bootstrap   </li>
                    <li> Angular   </li>
                    <li>Laravel   </li>
                    <li> GIT </li>
                    <li> Docker   </li>
                    <li>  AWS </li>
                    <li>HTML  </li>
                    <li>  CSS   </li>
                    <li> SRS development   </li>
                    <li>  Wireframe development   </li>
                </ul>
              </p>
          
             <p>
                <h3>
                Currently I am working with use cases like
                </h3>
                <ul>
                <li>  Multi-Role Authentication and protected routes </li>
                    <li> Advanced Data-intensive CRUD operations </li>
                    <li>  Job application portal development  </li>
                    <li>   Quiz App development </li>
                    <li>   Third-Party data integration, etc  </li>
                    <li>  Developing the ER Models   </li>
                    <li>    Designing the schemas </li>
                    <li> Architecture design.  </li>
                    <li>  Component based architecture.   </li>

                </ul>
             </p>
              </Col>
            
         </Row>
             


        </div>
    </div>
}

export default Container;