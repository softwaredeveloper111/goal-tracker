 function sendSuccess( res, status , message,data){
  
  const statusCode = status || 200
  const response = {
      success:true,
      message,
      data,
  }

  res.status(statusCode).json(response)

}


export default sendSuccess