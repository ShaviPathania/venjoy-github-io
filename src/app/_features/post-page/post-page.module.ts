import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPageComponent } from './post-page.component';
import { PageHeaderModule } from '../_page/page-header/page-header.module';
import { PageFooterModule } from '../_page/page-footer/page-footer.module';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    PageFooterModule,
  ],
  declarations: [PostPageComponent]
})
export class PostPageModule { }

@NgModule({
  imports: [
    PostPageModule,
  ]
})
export class PostPageRouterModule { }
