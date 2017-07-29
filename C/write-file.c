#include <stdio.h>
#include <stdlib.h> 

int main(void) {
	FILE *file1, *file2;
	char pref[256];
	int popu;
	float area, mitsudo;
	
  if ((file1 = fopen("jinkou.txt", "r")) == NULL) {
    printf("This file can not be opened\n");
    exit(1);
  }

  if ((file2 = fopen("mitsudo.txt", "w")) == NULL) {
    printf("This file can not be opened\n");
    exit(1);
  }

  while (fscanf (file1 , "%s", pref) != -1) {
    fscanf(file1, "%d", &popu);
    fscanf(file1, "%f", &area);
    mitsudo = (float)popu / area;
    fprintf(file2, "%8s %8.2f 人/Km2\n", pref, mitsudo);
  }

  fclose(file1);
  fclose(file2);
}