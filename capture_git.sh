#!/bin/bash
git status > git_info.txt 2>&1
git remote -v >> git_info.txt 2>&1
git branch --show-current >> git_info.txt 2>&1
echo "executed" > execution_check.txt
