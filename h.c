#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char lhs[10];
    char rhs[10][10];
    int n;
} Production;

Production pro[10];

void findTer(char* temp, char* str, int i) {
    int k, l, t;
    for (k = 0; k < 10; k++) {
        if (temp[i] == pro[k].lhs[0]) {
            char temp2[20] = {0};
            char temp3[20] = {0};
            for (t = 0; t < pro[k].n; t++) {
                strncpy(temp2, temp + i + 1, sizeof(temp2));
                memset(temp + i, 0, sizeof(temp) - i);
                strncpy(temp + i, pro[k].rhs[t], sizeof(temp) - i - 1);
                strcat(temp, temp2);
                if (str[i] == temp[i]) {
                    return;
                } else if (str[i] != temp[i] && temp[i] >= 'A' && temp[i] <= 'Z') {
                    break;
                }
            }
            break;
        }
    }
    if (temp[i] >= 'A' && temp[i] <= 'Z') {
        findTer(temp, str, i);
    }
}

int main() {
    int i, j, k, l, m, n = 0;

    for (i = 0; i < 10; i++) {
        pro[i].n = 0;
    }

    FILE* f = fopen("input.txt", "r");
    if (!f) {
        perror("Error opening file");
        return 1;
    }

    while (fscanf(f, "%s", pro[n].lhs) != EOF) {
        if (n > 0 && strcmp(pro[n].lhs, pro[n - 1].lhs) == 0) {
            fscanf(f, "%s", pro[n - 1].rhs[pro[n - 1].n]);
            pro[n - 1].n++;
            continue;
        }
        fscanf(f, "%s", pro[n].rhs[pro[n].n]);
        pro[n].n++;
        n++;
    }
    fclose(f);
    n--;

    printf("\n\nTHE GRAMMAR IS AS FOLLOWS\n\n");
    for (i = 0; i < n; i++) {
        for (j = 0; j < pro[i].n; j++) {
            printf("%s -> %s\n", pro[i].lhs, pro[i].rhs[j]);
        }
    }

    char str[20];
    while (1) {
        printf("\n\nENTER ANY STRING ( 0 for EXIT ) : ");
        scanf("%s", str);
        if (str[0] == '0') {
            break;
        }

        for (j = 0; j < pro[0].n; j++) {
            char temp[20] = {0};
            strcpy(temp, pro[0].rhs[j]);
            m = 0;
            for (i = 0; i < strlen(str); i++) {
                if (str[i] == temp[i]) {
                    m++;
                } else if (str[i] != temp[i] && temp[i] >= 'A' && temp[i] <= 'Z') {
                    findTer(temp, str, i);
                    if (str[i] == temp[i]) {
                        m++;
                    }
                } else {
                    break;
                }
            }
            if (m == strlen(str) && strlen(str) == strlen(temp)) {
                printf("\n\nTHE STRING can be PARSED !!!\n");
                break;
            }
        }
        if (j == pro[0].n) {
            printf("\n\nTHE STRING can NOT be PARSED !!!\n");
        }
    }

    return 0;
}
