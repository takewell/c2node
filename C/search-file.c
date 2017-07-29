#include <stdio.h>
#include <stdlib.h> 

int main(void) {
	FILE *file1;
	char pref[50][256], dmy[80], indata[80];
	float mitsudo[50];
	int n = 0, kosuu;
	
  if ((file1 = fopen("jinkou.txt", "r")) == NULL) {
    printf("This file can not be opened\n");
    exit(1);
  }

  while (fscanf (file1 , "%s", pref[n]) != -1) {
    fscanf(file1, "%f", &mitsudo[n]);
    fscanf(file1, "%s", &dmy);
    ++n;
  }
  kosuu = n - 1;

  fclose(file1);
  
  while(indata[0] != 'q') {
    printf("都道府県名(qで終了)=");
    gets(indata);
    // 検索
    for (n = 0; n <= kosuu; ++n) {
      if (strcmp(pref[n], indata) == 0) {
        printf("%8s %8.2f 人/Km2\n", pref[n], mitsudo[n]);
      }
    }
  }
}