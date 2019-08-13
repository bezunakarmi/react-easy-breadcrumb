# react-simple-breadcrumb

A simple react component for generating breadcrumbs.

## Installation

```sh
npm install react-simple-breadcrumb
```

or

```sh
yarn add react-simple-breadcrumb
```

## `Breadcrumbs` component props

The breadcrumbs instance is implemented in the `Breadcrumbs` component.

| property    | type      | default     | description                         |
| ----------- | --------- | ----------- | ----------------------------------- |
| `separator` | _element_ | `>`         | separator between breadcrumbs items |
| `crumbs`    | array     | `undefined` | array of breadcrumbs items          |

## `crumbs` props

The crumbs property is array of breadcrumbs item that will be used in the `Breadcrumbs` component.

| property    | type                            | default        | description                                         |
| ----------- | ------------------------------- | -------------- | --------------------------------------------------- |
| `link`      | Link (eg: `https:/github.com/`) | `/`            | Link that is to be routed when clicked on the item. |
| `title`     | Text                            | `empty string` | The title that will be displayed as a crumb/item.   |
| `tintColor` | Color or hex value              | `#4a4a4a`      | Color that you want the item to display.            |

# Example

```javascript
import { Breadcrumbs } from 'react-simple-breadcrumbs';
import Separator from '../images/separator.svg';

const links = [
	{
		link: 'http://github.com/',
		title: 'Home'
	},
	{
		link: 'http://google.com/',
		title: 'Profile',
		tintColor: '#3098'
	},
	{
		link: 'http://twitter.com/',
		title: 'Bookmarks',
		tintColor: 'red'
	}
];

const Page = (
	<div>
		<Breadcrumbs crumbs={links} separator={Separator} />
	</div>
);

export default Page;
```

### result

<img width="349" alt="Screen Shot 2019-08-13 at 3 14 10 PM" src="https://user-images.githubusercontent.com/12218329/62930967-31a79880-bddd-11e9-811d-875a4ed08853.png">

## LICENSE

#### [MIT](./LICENSE.md)
