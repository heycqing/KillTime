#include <stdio.h>
#include <string.h>

int main(){
    char str[][20] = {"hello","tencent","ppp"};
    printf(" %lu ",sizeof(str[0]));
    return 0;
}