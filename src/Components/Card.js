import React from 'react'

export default function 
(props) {
  return (
    <>
    
         <div className="my-3">
                    <div className="card  shadow" style={{ width: "18rem" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXXVznwdR_ZJcz_PvYozc34bhys9Z-bkFlA&usqp=CAU" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <h3 className="card-text">{props.degree}</h3>
                            <h3 className="card-text">{props.dstate}</h3>

                        </div>
                    </div>
         </div>
         </>
  )
}
