import { loadRemoteModule } from '@angular-architects/native-federation';
import { NgComponentOutlet } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-pagination-wrapper',
  imports: [],
  templateUrl: './pagination-wrapper.html',
  styleUrl: './pagination-wrapper.scss',
})
export class PaginationWrapper {

  @Input() page!: number;
  @Input() size!: number;
  @Input() collectionSize!: number;
  @Output() pageChange = new EventEmitter();

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  async ngOnInit() {
    const m = await loadRemoteModule('shared-ui', './Pagination');
    const comp: ComponentRef<any> = this.container.createComponent(m.Pagination);

    comp.setInput('page', this.page);
    comp.setInput('size', this.size);
    comp.setInput('collectionSize', this.collectionSize);

    comp.instance.pageChange.subscribe((e: any) => {
      this.pageChange.emit(e);
    });
  }

}
