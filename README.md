# Configuration

1. git config --global user.name "Davinder Singh"
2. git config --global user.email "dave626429@gmail.com"
3. git config --list

# Setting SSH key pair for authentication

[Link Text](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

<pre>
```GITBASH
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
</pre>

ssh-add ~/.ssh/<custom_name>
