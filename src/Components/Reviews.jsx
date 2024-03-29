import React from "react";
import profile from '../Images/reviewprofile.jpg';
import Card from 'react-bootstrap/Card';

const reviews=[{id:1,name:'John Riyon',review:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',imgurl:'profile'},
{id:1,name:'Mathew kon',review:'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',imgurl:'profile'},
{id:1,name:'Henry oliver',review:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur',imgurl:'profile'},
{id:1,name:'Charles Joseph',review:'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',imgurl:'profile'}
]
export function Reviews(){
    return(
        <div className="container my-5">
               <div className="row gx-5 gy-5">
                <h1 style={{textAlign:"center"}}>Reviews</h1>
                { reviews.map((i)=>(
                <div className="col-lg-6 d-flex flex-column">
                     <Card className="shadow-lg border-0" style={{height:'180px'}}>
                        <Card.Body>
                            <Card.Text>{i.review}</Card.Text>
                        </Card.Body>
                        <Card.Footer style={{height:'70px'}} className="d-flex align-items-center justify-content-start">
                             <img src={profile} style={{height:"75%"}} className="img-fluid rounded-circle border border-dark border-1"></img>
                             <Card.Text className="text-success px-5">{i.name}</Card.Text>
                        </Card.Footer>
                     </Card>
                </div>
                ))
}
               </div>
        </div>
    )
}