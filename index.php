<html>
<head>
  <script src="./article-list-item.js"></script>
  <script src="./menu.js"></script>
  <style type="text/css">
    body {
      padding: 50px 10px;
    }
  </style>
  <link href="./article-list.css" rel="stylesheet">
</head>
<body>
<h1>Liste des articles en vente</h1>
<div class="ArticleList">
<?php
  $articles = array();
  for ($i = 0; $i < 30; $i++) {
    $article = new class{};
    $article->title = 'Aspirateur Rowenta 1000W';
    $article->price = $i;
    $article->photo = 'photo.jpg';
    $articles['A'] = $article;
  }
  foreach($articles as $id => $article) {
    echo <<<ELEMENT
    <a class="ArticleList-item" href="./detail.php?id=$id">
      <ktrc-article-list-item 
        title="$article->title"
        photo="$article->photo"
      />
    </a>
ELEMENT;
  }
?>
</div>
<prilibreri-menu/>
</body>
</html>