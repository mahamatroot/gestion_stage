<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Space Admin</title>
    <link rel="stylesheet" href="design/design.css">
</head>
<body>
    <header>
        <nav class="menu">
            <h1 class="logo">SgStage</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Admin</a></li>
                <li><a href="#">Deconnexion</a></li>
            </ul>
        </nav>
    </header>
    <table>
        <tr>
            <td>
                <h1>Ajouter un nouveau administrateur</h1>
                <form onsubmit="event.preventDefault(); onFormSubmit()">

                    <div>
                        <label for="code">Id<span style="color: red;">*</span> <label class="validation-error hide"  id="idValidationError" >Ce champs est requis!</label></label>
                        <input type="text" name="id" id="id">
                    </div>
                    <div>
                        <label for="pseudo">Pseudo<span style="color: red;">*</span> <label class="validation-error hide"  id="pseudoValidationError" >Ce champs est requis!</label> </label>
                        <input type="text" name="pseudo" id="pseudo">
                    </div>
                    <div>
                        <label for="email">Nom & Prenom<span style="color: red;">*</span> <label class="validation-error hide"  id="nomcompletValidationError" >Ce champs est requis!</label></label>
                        <input type="text" name="nomcomplet" id="nomcomplet">
                    </div>
                    <div>
                        <label for="email">E-mail<span style="color: red;">*</span> <label class="validation-error hide"  id="emailValidationError" >Ce champs est requis!</label></label>
                        <input type="email" name="email" id="email">
                    </div>
                    <div>
                        <label for="adresse">Adresse<span style="color: red;">*</span> <label class="validation-error hide"  id="adresseValidationError" >Ce champs est requis!</label></label>
                        <input type="text" name="adresse" id="adresse">
                    </div>
    
                    <div>
                        <label for="role">Role<span style="color: red;">*</span> <label class="validation-error hide"  id="roleValidationError" >Ce champs est requis!</label></label>
                        <input type="text" name="role" id="role">
                    </div>
                    <div>
                        <label for="etat">Etat<span style="color: red;">*</span> <label class="validation-error hide"  id="etatValidationError" >Ce champs est requis!</label></label>
                        <input type="text" name="etat" id="etat">
                    </div>
                    <div>
                        <input class="form-action-buttons submit" type="submit" value="Ajouter">
                    </div>

                </form>
            </td>
            <td>
                <table class="list" id="emplist">
                    <thead>
                        <tr>
                            <td class="thead">ID</td>
                            <td class="thead">Pseudo</td>
                            <td class="thead">Nom & Prenom</td>
                            <td class="thead">Email</td>
                            <td class="thead">Adresse</td>
                            <td class="thead">Role</td>
                            <td class="thead">Etat</td>
                            <td class="thead">Actions</td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </td>
        </tr>
    </table>
    <script src="js/script.js"></script>
</body>
</html>