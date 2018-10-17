class MyCircularQueue:

    def __init__(self, k):
        """
        Initialize your data structure here. Set the size of the queue to be k.
        :type k: int
        """
        self.queue = [0] * k
        self.head = -1
        self.tail = -1
        

    def enQueue(self, value):
        """
        Insert an element into the circular queue. Return true if the operation is successful.
        :type value: int
        :rtype: bool
        """
        if self.isFull():
            return False
        else:
            self.tail += 1
            self.tail = self.tail % len(self.queue)
            self.queue[self.tail] = value
            if self.head == -1:
                self.head = 0
            return True
        

    def deQueue(self):
        """
        Delete an element from the circular queue. Return true if the operation is successful.
        :rtype: bool
        """
        if self.isEmpty():
            return False
        if self.head == self.tail:
            self.head = -1;
            self.tail = -1;
        else:
            self.head += 1;
            self.head = self.head % len(self.queue)
        return True

    def Front(self):
        """
        Get the front item from the queue.
        :rtype: int
        """
        if self.head == -1:
            return -1
        return self.queue[self.head]
        

    def Rear(self):
        """
        Get the last item from the queue.
        :rtype: int
        """
        if self.tail == -1:
            return -1
        return self.queue[self.tail]
        

    def isEmpty(self):
        """
        Checks whether the circular queue is empty or not.
        :rtype: bool
        """
        if self.head == -1:
            return True
        return False
        

    def isFull(self):
        """
        Checks whether the circular queue is full or not.
        :rtype: bool
        """
        if (self.tail + 1) % len(self.queue) == self.head:
            return True
        return False

"""
Uncomment the following lines to test
"""
# obj = MyCircularQueue(3)
# print(obj.enQueue(1))
# print(obj.enQueue(2))
# print(obj.enQueue(3))
# print(obj.enQueue(4))
# print(obj.deQueue())
# print(obj.Front())
# print(obj.deQueue())
# print(obj.deQueue())
# print(obj.deQueue())
# print(obj.Rear())
