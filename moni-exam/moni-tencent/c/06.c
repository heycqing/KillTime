#include <stdio.h>
#include <limits.h>
#include <string.h>
int main(){

    char str[][20] = {"hello","tencent"};
    char *p = str[0];
    int dim = sizeof(str)/sizeof(str[0]);
    int **p1;
    int *p2[10];
    int (*p3)[10];
    printf(" %d %lu %lu %lu %lu %lu\n",dim,sizeof(str),strlen(p),sizeof(p1),sizeof(p2),sizeof(p3));
    return 0;
}
