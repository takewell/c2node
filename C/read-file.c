#include <stdio.h>
#include <stdlib.h>
#include <string.h> 

main() {
	FILE *fp;
	char pref[256];
	int popu;
	float area;
	
  if((fp = fopen("jinkou.txt", "r")) == NULL) {
    printf("This file can not be opened\n");
    exit(1);
  }

  while (fscanf (fp , "%s", pref) != -1) {
    fscanf(fp, "%d", &popu);
    fscanf(fp, "%f", &area);
    printf("%10s%10d人%10.2fKm2\n", pref, popu, area);
  }

  fclose(fp);
  return area;
}