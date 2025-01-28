# AppMeteo
Requis pour mener à bien le projet météo :
Projet mené par Cédric, Ethan, Aya et Salimou

Le 28 Janvier 2025 :

Installation et synchronisation de github sur les pc avec un tutoriel :

Pour installer et configurer GitHub avec Visual Studio Code (VS Code) sur ton ordinateur, voici les étapes à suivre :

1. Installer Git sur ton ordinateur
Git est l'outil nécessaire pour interagir avec GitHub depuis ta machine locale. Voici comment l'installer :

Windows :

Télécharge Git depuis le site officiel de Git: https://git-scm.com/downloads/win (prendre la version 64 bits)
L'installateur va se télécharger automatiquement. Une fois téléchargé, lance-le et suis les instructions de l'assistant d'installation.
Pour vérifier si l'installation est correcte, ouvre l'invite de commande (cmd) et tape git --version.
macOS :

Ouvre le terminal et tape git --version. Si Git n'est pas installé, il te proposera de l'installer via Xcode Command Line Tools. Suis les instructions à l'écran.

2. Installer Visual Studio Code (VS Code)
Si tu n'as pas encore installé VS Code, télécharge-le depuis le site officiel de VS Code et suis les instructions d'installation.

3. Installer l'extension Git dans VS Code
VS Code inclut un support natif pour Git, mais pour bénéficier de fonctionnalités supplémentaires comme la gestion des dépôts GitHub, il est recommandé d’installer l'extension GitHub.

Ouvre Visual Studio Code.
Clique sur l'icône des Extensions (ou presse Ctrl+Shift+X).
Recherche "GitHub" et installe l'extension GitHub Pull Requests and Issues.
Cela te permettra de gérer tes pull requests et problèmes GitHub directement depuis VS Code.

4. Configurer Git avec ton compte GitHub
Configurer ton identité Git : Ouvre une invite de commande (ou le terminal) et configure ton nom et ton adresse email Git :

bash

git config --global user.name "Ton Nom"
git config --global user.email "ton.email@example.com"
Authentification avec GitHub : Pour pouvoir pousser tes changements vers GitHub, tu dois t'authentifier. Tu peux utiliser soit ton nom d'utilisateur et mot de passe GitHub (mais GitHub recommande désormais d'utiliser des tokens personnels pour plus de sécurité), soit la méthode d'authentification SSH. Voici comment procéder :

Méthode 1 : Authentification avec un token personnel

Va dans les paramètres de GitHub pour créer un token d'accès personnel.
Une fois le token généré, utilise-le à la place de ton mot de passe lorsque tu pousses des commits vers GitHub.
Méthode 2 : Authentification SSH

Suis ce guide GitHub pour configurer une clé SSH. Cela te permettra de pousser vers GitHub sans avoir à entrer ton mot de passe à chaque fois.
5. Cloner un dépôt GitHub dans VS Code
Ouvre VS Code et clique sur "View" > "Source Control" ou presse Ctrl+Shift+G.
Clique sur "Clone Repository" et entre l'URL de ton dépôt GitHub.
Choisis le dossier où tu veux cloner le projet, et VS Code va télécharger tout le contenu du dépôt dans ce dossier.
6. Faire des changements et pousser vers GitHub
Ouvre le fichier à modifier dans VS Code.
Fais les changements souhaités.
Dans le panneau Source Control de VS Code, tu verras les fichiers modifiés. Ajoute-les en cliquant sur l'icône "+" à côté du fichier.
Fais un commit en ajoutant un message de commit dans le champ prévu à cet effet et en cliquant sur le bouton "✓" (check).
Pousse tes changements en cliquant sur les trois points verticaux dans le panneau Source Control et sélectionne "Push".
Et voilà ! Tu es maintenant prêt à travailler avec GitHub dans VS Code. Si tu as des questions à n'importe quelle étape, n'hésite pas à demander.


IMPORTANT !!!

Pour que les modifications se réalisent, il faut obligatoirement faire ctrl+shift+g pour ouvrir le source control, et bien écrire un message avant d'appuyer sur commit.
Ensuite pour mettre à jour, ouvrir le terminal et taper git pull.