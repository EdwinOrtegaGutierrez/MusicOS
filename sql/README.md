# Commands to use in the REST API
Search users: <br>
```SELECT correo, contraseña FROM usuarios WHERE correo = {email} and contraseña = {password};```

Main genres: <br>
```SELECT albumes.genero, SUM(total) AS totales FROM albumes JOIN ventas ON ventas.codigo_album = albumes.codigo_album GROUP BY albumes.genero ORDER BY totales DESC LIMIT 5;``` <br> ```CALL principales_generos();```

Best sellers: <br>
``` SELECT albumes.titulo, SUM(total) AS num_ventas FROM ventas JOIN albumes ON albumes.codigo_album = ventas.codigo_album GROUP BY albumes.titulo ORDER BY num_ventas DESC LIMIT 5; ``` <br> ```CALL mas_vendidos();```

Categories/Genres: <br>
``` SELECT genero FROM albumes GROUP BY genero; ```

Show albums depending on the category: <br>
```SELECT titulo FROM albumes WHERE genero = "Rock" ORDER BY titulo ASC; ``` <br> ``` INSERT INTO musicos.usuarios ('nombre', 'apellidos', 'correo', 'contraseña') VALUES ('', '', '', ''); ``` <br> ``` CALL albumes_categoria('Rock'); ```