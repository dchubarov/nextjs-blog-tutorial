import _ from 'lodash';

export interface Breadcrumb {
  pathname: string;
  title?: string;
  href: string;
}

export function breadcrumbs(
  ...args: Array<string | Omit<Breadcrumb, 'href'> | undefined>
): Breadcrumb[] {
  const buildLink = (i: number, path: string) => {
    return i > 0 ? '/' + args.slice(0, i).join('/') + `/${path}` : `/${path}`;
  };

  return args
    .filter((arg) => typeof arg !== 'undefined')
    .map((arg, index) => {
      if (typeof arg === 'string') {
        return {
          pathname: arg,
          title: _.capitalize(arg),
          href: buildLink(index, arg),
        } satisfies Breadcrumb;
      } else {
        return {
          ...arg,
          href: buildLink(index, arg.pathname),
        } satisfies Breadcrumb;
      }
    });
}
