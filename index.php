
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='stylesheet' href='styles.css'/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <title>Медиапоиск</title>
</head>
<body style="width:100%; height:100%; background: rgb(250,240,220); background: linear-gradient(90deg, rgba(250,240,220,1) 0%, rgba(255,104,100,1) 100%); font-family: 'Comfortaa', sans-serif; overflow-x: hidden;">
    <div style="display:flex; justify-content:space-between">
        <h1 style="font-size: 56px; margin-left: 3%">MEDIAPOISK</h1>
    </div>
    <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-around;">
    <div  style="display:flex; flex-direction: column; background-color: #FD948B; border-radius:15px; width: 35%; height:300px">
        <form style="display:flex; flex-direction: column; align-items:center; height:300px; justify-content: flex-start;" action="index.php" method="POST">
        <div style="display: flex; flex-direction: column; justify-content: center;">
            <p style="font-size:24px;">Сфера</p>
            <select name="SPHERE" style="width:175px; height:40px; font-size:24px; background-color: #FAE3D1">
                <option value="film">Фильмы</option>
                <option value="book">Книги</option>
                <option value="game">Игры</option>
            </select>
        </div>
        <div style="display: flex; flex-direction: row">
            <div> 
                <p style="font-size:24px; margin-bottom:3%">Жанр</p>
                <select name="GANR" style="width:175px; height:40px; font-size:24px; background-color: #FAE3D1">
                    <option value="Фантастика">Фантастика</option>
                    <option value="Детектив">Детектив</option>
                    <option value="Хоррор">Хоррор</option>
                </select>
            </div>
        <div style="margin-left:5%">
            <p style="font-size:24px; margin-bottom:3%">Год</p>
            <select name="GODI" style="width:175px; height:40px; font-size:24px; background-color: #FAE3D1">
                <option value="2000">2000-2009</option>
                <option value="2010">2010-2019</option>
            </select>
        </div>
    </div>
    <button style="width:120px; height:40px; font-size:18px; margin-top:5%; border-radius: 15px; background-color: #FAE3D1" type="submit">Посмотреть</button>
    </form>
    </div>
    <div style="display:flex; flex-direction: column; background-color: #FAE3D1; border-radius:15px; padding: 50px">
        <form  method='POST' action='user_table.php'>
        <TABLE BORDER=1 style='background-color:#FAE3D1; border-radius: 10px'>
        <th name="Name" style='width: 200px; font-size:24px'>Название</th>
        <th name="Genre" style='width: 100px; font-size:24px'>Жанр</th>
        <th name="Date" style='width: 75px; font-size:24px'>Год</th>
        </form>
    </div>
</div>

</body>
</html>
<?php

if (!empty($_POST['GANR']) and !empty($_POST['GODI']) and !empty($_POST['SPHERE'])) {
    $sphere = $_POST['SPHERE'];
    $ganr = $_POST['GANR'];
    $godi = $_POST['GODI'];
    $godi2 = $_POST['GODI'] + 9;
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
    $dbh = mysqli_connect('localhost', 'root', '', 'mediapoisk');
    $sql = "SELECT * FROM $sphere WHERE Genre='$ganr' AND Date >= '$godi' AND Date <= '$godi2' ";
    $result = mysqli_query($dbh, $sql);

    while ($row = mysqli_fetch_array($result)) {
                    $imagePath = "images/". $row['Name']. ".jpg"; // assume image files are stored in an "images" folder
                    if (file_exists($imagePath)) {
                       ?>
                        <tr>
                            <td>
                                <img style='width: 150px height: 150px' src="<?php echo $imagePath;?>" alt="<?php echo $row['Name'];?>">
                                <?php echo $row['Name'];?>
                            </td>
                            <td><?php echo $row['Genre'];?></td>
                            <td><?php echo $row['Date'];?></td>
                        </tr>
                        <?php
                    } else {
                       ?>
                        <tr>
                            <td><?php echo $row['Name'];?></td>
                            <td><?php echo $row['Genre'];?></td>
                            <td><?php echo $row['Date'];?></td>
                        </tr>
                        <?php
                    }
                }
            }
?>