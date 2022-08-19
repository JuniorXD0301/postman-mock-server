pm.test("Verify key as_token in response", function(){ /*Validar si as token existe*/
    pm.response.to.have.jsonBody("as_token"); /* Obtener la respuesta*/
    pm.environment.unset("url_bearer_token"); /* eliminar una varibale de entorno si existe*/
    var json = JSON.parse(responseBody); /*crear una variable JSON */
    postman.setEnvironmentVariable("url_bearer_token", `Bearer ${json.as_token}`);
})