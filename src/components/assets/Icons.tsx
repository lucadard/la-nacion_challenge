type IconMenuProps = {
  width?: number
  open: boolean
}

export const IconMenu = ({ open = true, width = 20 }: IconMenuProps) => (
  <svg viewBox="-10 0 100 70" width={width} height="auto">
    <rect
      width="100"
      height="10"
      style={
        !open
          ? { transition: 'all 200ms ease-in-out' }
          : {
              transform: 'rotate(45deg)',
              transformOrigin: 'top left',
              transition: 'all 200ms ease-in-out'
            }
      }
    ></rect>
    <rect
      y="35"
      width="100"
      height="10"
      style={
        !open
          ? { transition: 'all 300ms ease-in-out' }
          : { opacity: 0, transition: 'all 300ms ease-in-out' }
      }
    ></rect>
    <rect
      y="70"
      width="100"
      height="10"
      style={
        !open
          ? { transition: 'all 200ms ease-in-out' }
          : {
              transform: 'rotate(-45deg)',
              transformOrigin: 'bottom left',
              transition: 'all 200ms ease-in-out'
            }
      }
    ></rect>
  </svg>
)

type SearchIconProps = {
  width?: number
}

export const SearchIcon = ({ width = 16 }: SearchIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height="auto"
    viewBox="0 0 24 24"
  >
    <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
  </svg>
)
