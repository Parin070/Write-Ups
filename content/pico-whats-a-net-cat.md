# What's a Net Cat? — PicoCTF

**Category:** General Skills
**Difficulty:** Very Easy

## Challenge

Connect to a remote service using netcat. Flag returned on connect.

## Process

Launch challenge instance, get host + port.

Connect with netcat:

```bash
nc fickle-tempest.picoctf.net 53846
```

Service replies immediately with flag.

## Flag

```
picoCTF{nEtCat_Mast3ry_575F8fFd}
```

## Takeaway

Basic netcat usage challenge. Netcat is core tool for interacting with raw TCP services, used constantly in later pwn and misc challenges.
