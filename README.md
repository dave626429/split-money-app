# GIT-SETUP

## Configuration

git config --global user.name "\<NAME\>"

git config --global user.email "\<EMAIL\>@gmail.com"

git config --list

## Setting SSH key pair for authentication

[SSH-KEY](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

```GITBASH
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

### starting ssh agent

```GITBASH
eval `ssh-agent -s`
```

### adding key to ssh agent

```GITBASH
ssh-add ~/.ssh/<custom_name>

```

### list added key in ssh agent

```GITBASH
ssh-add -l

```

## cmd/shell

- add the config file in the .ssh folder

  Host github.com
  IdentityFile ~/.ssh/git_rsa_key
