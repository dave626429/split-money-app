# Configuration

git config --global user.name "\<NAME\>"

git config --global user.email "\<EMAIL\>@gmail.com"

git config --list

# Setting SSH key pair for authentication

[SSH-KEY](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

<pre>
```GITBASH
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
</pre>

ssh-add ~/.ssh/<custom_name>
