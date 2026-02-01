export const PAGE_HEAD: string =  `<!DOCTYPE html>
<!-- ---------------------------------------------------------------------------------- -->
<!-- ENTRY FORM FOR tour                            G Kaniuk Jan 2019                   -->
<!-- ---------------------------------------------------------------------------------- -->
<!--                                                                                    -->
<!-- THE MAIN FORM consists of the following blocks:                                    -->
<!--                                                                                    -->
<!--    EGD SEARCH BLOCK                                                                -->
<!--    PLAYER DETAILS BLOCK                                                            -->
<!--    CUSTOM BLOCK                                                                    -->
<!--    SUBMIT BLOCK                                                                    -->
<!--    SYSTEM BLOCK                                                                    -->
<!--                                                                                    -->
<!-- The following html element names are reserved for future use:                      -->
<!--    ID, REG, NAME,NAME-GF,NAME-FG,  GROUP, ROUNDS                                   -->
<!-- ---------------------------------------------------------------------------------- -->

<html lang="en">
<head>
<meta charset="utf-8" />
<link rel="stylesheet" type="text/css" href="../entrysys/style-reset-new.css">
<link rel="stylesheet" type="text/css" href="../entrysys/entryform-style.css">

<title></title>
</head>
<body>
<!-- ---------------------------------------------------------------------------------- -->
<!-- MAIN FORM                                                                          -->
<form class="frm-entry" id="id_entryform"
action="../entrysys/entryform-handler-new.php" method="post"
    autocomplete="on">

  <!-- ---------------------------------------------------------------------------------- -->
  <!-- TOOLTIP BOX                                                                        -->
  <!-- ---------------------------------------------------------------------------------- -->
  <div id="id_tiptxt" hidden>
Either hover or click
<br>
on an info icon <span class="icon-i-new"> i </span>
<br>
for help.
<br>
The fields with a "*" symbol are required.
  </div>`;
